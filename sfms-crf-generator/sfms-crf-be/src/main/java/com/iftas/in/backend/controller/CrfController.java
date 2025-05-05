package com.iftas.in.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CrfController {

    @GetMapping({"/crf", "/getcrf"})
    public String serveApp() {
        return "forward:/index.html";
    }
}