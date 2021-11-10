package com.backend.backend.exchange.services;

import org.apache.http.HttpEntity;
import org.apache.http.HttpHeaders;
import org.apache.http.NameValuePair;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

public class ExchangeEndpoint {
    private static String apiKey = "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c";
    private String uri;

    public JSONObject callMap() throws ParseException {
        uri = "https://sandbox-api.coinmarketcap.com/v1/exchange/map";
        String result = "";
        List<NameValuePair> parameters = new ArrayList<NameValuePair>();
        parameters.add(new BasicNameValuePair("start", "1"));
        parameters.add(new BasicNameValuePair("limit", "2"));
        try {
            result = makeAPICall(uri, parameters);
        } catch (IOException e) {
            System.out.println("Error: cannot access content - " + e.toString());
        } catch (URISyntaxException e) {
            System.out.println("Error: Invalid URL " + e.toString());
        }
        JSONParser parser = new JSONParser();
        JSONObject object = (JSONObject) parser.parse(result);
        return object;

    }


    public JSONObject callListingsLatest() throws ParseException {
        uri = "https://sandbox-api.coinmarketcap.com/v1/exchange/listings/latest";
        String result = "";
        List<NameValuePair> parameters = new ArrayList<NameValuePair>();
        parameters.add(new BasicNameValuePair("start", "1"));
        parameters.add(new BasicNameValuePair("limit", "2"));
        try {
            result = makeAPICall(uri, parameters);
        } catch (IOException e) {
            System.out.println("Error: cannot access content - " + e.toString());
        } catch (URISyntaxException e) {
            System.out.println("Error: Invalid URL " + e.toString());
        }
        JSONParser parser = new JSONParser();
        JSONObject object = (JSONObject) parser.parse(result);
        return object;

    }

    public JSONObject callLatestExchange() throws ParseException {
        uri = "https://sandbox-api.coinmarketcap.com/v1/exchange/listings/latest";
        String result = "";
        List<NameValuePair> parameters = new ArrayList<NameValuePair>();
        parameters.add(new BasicNameValuePair("start", "1"));
        parameters.add(new BasicNameValuePair("limit", "2"));
        try {
            result = makeAPICall(uri, parameters);
        } catch (IOException e) {
            System.out.println("Error: cannot access content - " + e.toString());
        } catch (URISyntaxException e) {
            System.out.println("Error: Invalid URL " + e.toString());
        }
        JSONParser parser = new JSONParser();
        JSONObject object = (JSONObject) parser.parse(result);
        return object;

    }

    public static String makeAPICall(String uri, List<NameValuePair> parameters) throws URISyntaxException, IOException {
        String response_content;

        URIBuilder query = new URIBuilder(uri);
        query.addParameters(parameters);

        CloseableHttpClient client = HttpClients.createDefault();
        HttpGet request = new HttpGet(query.build());

        request.setHeader(HttpHeaders.ACCEPT, "application/json");
        request.addHeader("X-CMC_PRO_API_KEY", apiKey);

        CloseableHttpResponse response = client.execute(request);

        try {
            System.out.println(response.getStatusLine());
            HttpEntity entity = response.getEntity();
            response_content = EntityUtils.toString(entity);
            EntityUtils.consume(entity);
        } finally {
            response.close();
        }

        return response_content;
    }
}
