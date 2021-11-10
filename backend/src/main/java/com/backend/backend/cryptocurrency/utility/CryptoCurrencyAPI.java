package com.backend.backend.cryptocurrency.utility;

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
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.*;


import java.io.IOException;
import java.net.URISyntaxException;
import java.util.*;

public class CryptoCurrencyAPI {
    private static String apiKey = "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c";
    private String uri;

    public CryptoCurrencyAPI(){}

    public JSONObject callMap() throws ParseException {
        uri = "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/map";
        String result = "";
        List<NameValuePair> parameters = new ArrayList<NameValuePair>();
        parameters.add(new BasicNameValuePair("start", "1"));
        parameters.add(new BasicNameValuePair("limit", "2"));
        try {
            result = makeAPICall(uri, parameters);
        } catch (IOException e) {
            System.out.println("Error: cannont access content - " + e.toString());
        } catch (URISyntaxException e) {
            System.out.println("Error: Invalid URL " + e.toString());
        }
        JSONParser parser = new JSONParser();
        JSONObject object = (JSONObject) parser.parse(result);
        return object;

    }


    public JSONObject callListingsLatest() throws ParseException {
        uri = "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
        String result = "";
        List<NameValuePair> parameters = new ArrayList<NameValuePair>();
        parameters.add(new BasicNameValuePair("start","1"));
        parameters.add(new BasicNameValuePair("limit","5"));
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

    public JSONObject callPricesLatest() throws ParseException {
        uri = "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
        String result = "";
        List<NameValuePair> parameters = new ArrayList<NameValuePair>();
        parameters.add(new BasicNameValuePair("start","1"));
        parameters.add(new BasicNameValuePair("limit","5"));
        try {
            result = makeAPICall(uri, parameters);
        } catch (IOException e) {
            System.out.println("Error: cannot access content - " + e.toString());
        } catch (URISyntaxException e) {
            System.out.println("Error: Invalid URL " + e.toString());
        }

        JSONObject pricesData = new JSONObject();
        JSONArray items = new JSONArray();
        JSONParser parser = new JSONParser();
        JSONObject object = (JSONObject) parser.parse(result);
        JSONArray jsonArray = (JSONArray) object.get("data");
        for (int i=0; i < jsonArray.size(); i++) {
            JSONObject specificListing = (JSONObject) jsonArray.get(i);
            Long id = (Long)  specificListing.get("id");
            String name = (String)  specificListing.get("name");
            JSONObject quoteObject = (JSONObject) specificListing.get("quote");
            JSONObject usdObject = (JSONObject) quoteObject.get("USD");
            double price = (double) usdObject.get("price");
            JSONObject item = new JSONObject();
            item.put("id", id);
            item.put("name", name);
            item.put("price", price);
            items.add(item);
        }
        pricesData.put("prices", items);
        return pricesData;
    }


    public JSONObject callMetadata() throws ParseException {
        uri = "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/info";
        String result = "";
        List<NameValuePair> parameters = new ArrayList<NameValuePair>();
        parameters.add(new BasicNameValuePair("id","1"));
        try {
            result = makeAPICall(uri, parameters);
        } catch (IOException e) {
            System.out.println("Error: cannont access content - " + e.toString());
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
