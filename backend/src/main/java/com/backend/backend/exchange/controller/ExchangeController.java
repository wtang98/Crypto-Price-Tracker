package com.backend.backend.exchange.controller;

import com.backend.backend.exchange.services.ExchangeEndpoint;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ExchangeController {

    ExchangeEndpoint data = new ExchangeEndpoint();




    @GetMapping("/exchange")
    public String helloWorld() {
        return "Hello World";
    }



}
