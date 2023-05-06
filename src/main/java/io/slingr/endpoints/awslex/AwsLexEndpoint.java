package io.slingr.endpoints.awslex;

import com.amazonaws.*;
import com.amazonaws.auth.AWS4Signer;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.http.*;
import com.amazonaws.util.IOUtils;
import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.framework.annotations.EndpointFunction;
import io.slingr.endpoints.framework.annotations.EndpointProperty;
import io.slingr.endpoints.framework.annotations.SlingrEndpoint;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import org.eclipse.jetty.http.HttpHeader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;

/**
 * <p>AWS LEX endpoint
 * <p>
 * API Reference: https://docs.aws.amazon.com/lex/latest/dg/API_Reference.html
 *
 * <p>Created by hpacini on 03/15/19.
 */
@SlingrEndpoint(name = "aws-lex", functionPrefix = "_")
public class AwsLexEndpoint extends HttpEndpoint {

    private static final Logger logger = LoggerFactory.getLogger(AwsLexEndpoint.class);
    private static final String SERVICE_NAME = "lex";

    @EndpointProperty
    private String accessKey;

    @EndpointProperty
    private String secretAccessKey;

    @EndpointProperty
    private String region;

    public AwsLexEndpoint() {
    }

    @Override
    public String getApiUri() {
        return null;
    }


    @EndpointFunction(name = "_httpGet")
    public Json httpGet(FunctionRequest functionRequest) {

        Json functionParams = functionRequest.getJsonParams();
        return doRequest(functionParams, HttpMethodName.GET);
    }

    @EndpointFunction(name = "_httpPost")
    public Json httpPost(FunctionRequest functionRequest) {

        Json functionParams = functionRequest.getJsonParams();
        return doRequest(functionParams, HttpMethodName.POST);

    }

    @EndpointFunction(name = "_httpPut")
    public Json httpPut(FunctionRequest functionRequest) {

        Json functionParams = functionRequest.getJsonParams();
        return doRequest(functionParams, HttpMethodName.PUT);

    }

    @EndpointFunction(name = "_httpDelete")
    public Json httpDelete(FunctionRequest functionRequest) {

        Json functionParams = functionRequest.getJsonParams();
        return doRequest(functionParams, HttpMethodName.DELETE);

    }

    private Json doRequest(Json functionParams, HttpMethodName httpMethodName) {

        Json requestParams = functionParams.json("params");
        final String path = functionParams.string("path");
        final String endpoint = functionParams.string("endpoint");
        final String body = functionParams.json("body") != null ?  functionParams.json("body").toString() : "";
        final String SERVICE_URI = "https://" + endpoint + "." + SERVICE_NAME + "." + region + ".amazonaws.com" + path;


        BasicAWSCredentials awsCredentials = new BasicAWSCredentials(accessKey, secretAccessKey);

        //Instantiate the request
        Request<Void> request = new DefaultRequest<>(SERVICE_NAME);
        request.setHttpMethod(httpMethodName);
        request.setEndpoint(URI.create(SERVICE_URI));

        if (httpMethodName == HttpMethodName.POST || httpMethodName == HttpMethodName.PUT) {
            InputStream is = new ByteArrayInputStream(body.getBytes());
            request.setContent(is);
        }

        for (String key : requestParams.keys()) {
            Object val = requestParams.object(key);
            if (val != null) {
                request.withParameter(key, (String) val);
            }
        }

        //Sign it...
        AWS4Signer signer = new AWS4Signer();
        signer.setRegionName(region);
        signer.setServiceName(request.getServiceName());
        signer.sign(request, awsCredentials);

        ClientConfiguration configuration = new ClientConfiguration();
        configuration.addHeader(HttpHeader.CONTENT_TYPE.asString(), "application/json;charset=UTF-8");
        configuration.addHeader(HttpHeader.ACCEPT.asString(), "application/json");

        try {
            //Execute it and get the response...
            Response<AmazonWebServiceResponse<String>> response = new AmazonHttpClient(configuration)
                    .requestExecutionBuilder()
                    .executionContext(new ExecutionContext(true))
                    .request(request)
                    .errorResponseHandler(new ErrorResponseHandler())
                    .execute(new StringResponseHandler());
            return Json.parse(response.getAwsResponse().getResult());
        } catch (AmazonServiceException ex) {
            return Json.parse(ex.getErrorMessage());
        }
    }


    class StringResponseHandler implements HttpResponseHandler<AmazonWebServiceResponse<String>> {

        @Override
        public AmazonWebServiceResponse<String> handle(com.amazonaws.http.HttpResponse response) throws IOException {

            AmazonWebServiceResponse<String> awsResponse = new AmazonWebServiceResponse<>();

            if(response.getContent() != null){
                //putting response string in the result, available outside the handler
                awsResponse.setResult(IOUtils.toString(response.getContent()));
            }

            return awsResponse;
        }

        @Override
        public boolean needsConnectionLeftOpen() {
            return false;
        }

    }


    class ErrorResponseHandler implements HttpResponseHandler<SdkBaseException> {


        @Override
        public SdkBaseException handle(HttpResponse response) throws Exception {

            SdkBaseException sdkBaseException = new AmazonServiceException(IOUtils.toString(response.getContent()));
            ((AmazonServiceException) sdkBaseException).setStatusCode(response.getStatusCode());

            return sdkBaseException;
        }

        @Override
        public boolean needsConnectionLeftOpen() {
            return false;
        }
    }

}
