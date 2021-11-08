package com.backend.backend.cryptocurrency.CryptoController;

import com.backend.backend.cryptocurrency.utility.CryptoCurrencyAPI;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/CryptoCurrency")
public class CryptoController {

    CryptoCurrencyAPI api = new CryptoCurrencyAPI();


    @GetMapping("/test")
    public String test(){
        return "Hello World";
    }

    @GetMapping("/map")
    public JSONObject adf() throws ParseException {
        return api.callMap();
    }

    @GetMapping("/listings")
    public JSONObject dfas() throws ParseException {
        return api.callListingsLatest();
    }

    @GetMapping("/metaData")
    public JSONObject jhk() throws ParseException {
        return api.callMetadata();
    }
}
