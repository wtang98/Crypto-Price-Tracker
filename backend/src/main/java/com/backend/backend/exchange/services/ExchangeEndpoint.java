package com.backend.backend.exchange.services;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.*;

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

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ExchangeEndpoint {

    private static String apiKey = "efc763af-270b-48b4-819e-b77425d036a8";

    public static void main(String[] args) {
        String uri = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
        List<NameValuePair> paratmers = new ArrayList<NameValuePair>();
        paratmers.add(new BasicNameValuePair("start","1"));
        paratmers.add(new BasicNameValuePair("limit","5000"));
        paratmers.add(new BasicNameValuePair("convert","USD"));

        try {
            String result = makeAPICall(uri, paratmers);
//            System.out.println(result);
            JSONArray resultArray = readAPI(result);
            System.out.println(resultArray);
        } catch (IOException e) {
            System.out.println("Error: cannont access content - " + e.toString());
        } catch (URISyntaxException e) {
            System.out.println("Error: Invalid URL " + e.toString());
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    public static String makeAPICall(String uri, List<NameValuePair> parameters)
            throws URISyntaxException, IOException {
        String response_content = "";

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
        Object obj= response_content;
//        System.out.println("THE RESPONSE OBJECT" + obj);
        return response_content;
//        return obj;


    }

    public static JSONArray readAPI(String response) throws ParseException {
//        String inline = "";
//        Scanner scanner = new Scanner(response.);
//
//        //Write all the JSON data into a string using a scanner
//        while (scanner.hasNext()) {
//            inline += scanner.nextLine();
//        }
//
//        //Close the scanner
//        scanner.close();

        //Using the JSON simple library parse the string into a json object
        JSONParser parse = new JSONParser();
        JSONObject data_obj = (JSONObject) parse.parse(response);
//        JSONObject obj = (JSONObject) data_obj.get("data");
        JSONArray jsonArray = (JSONArray) data_obj.get("data");
//        System.out.println(jsonArray);
        return jsonArray;
    }
}
