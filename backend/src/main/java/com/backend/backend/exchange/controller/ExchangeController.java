package com.backend.backend.exchange.controller;

import com.backend.backend.exchange.services.ExchangeEndpoint;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/exchange")
public class ExchangeController {

    ExchangeEndpoint api = new ExchangeEndpoint();

    @GetMapping("/map")
    public JSONObject adf() throws ParseException {
        return api.callMap();
    }

    @GetMapping("/listings")
    public JSONObject asds() throws ParseException {
        return api.callListingsLatest();
    }

    @GetMapping("/latest")
    public JSONObject als() throws ParseException {
        return api.callLatestExchange();
    }

}
