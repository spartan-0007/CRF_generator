package com.iftas.in.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/*.js", "/*.css", "/*.html", "/*.svg", "/*.ico", "/*.json")
                .addResourceLocations("classpath:/static/");

        registry.addResourceHandler("/_next/**")
                .addResourceLocations("classpath:/static/_next/");

        registry.addResourceHandler("/crf/static/**")
                .addResourceLocations("classpath:/static/crf/static/");
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/")
                .setViewName("forward:/index.html");

        registry.addViewController("/crf")
                .setViewName("forward:/index.html");

        registry.addViewController("/crf/**")
                .setViewName("forward:/index.html");

        registry.addViewController("/getcrf")
                .setViewName("forward:/index.html");

        registry.addViewController("/{path:^(?!api|_next|assets)(?!.*\\.).*}")
                .setViewName("forward:/index.html");

        registry.addViewController("/{path:^(?!api|_next|assets)(?!.*\\.).*}/**")
                .setViewName("forward:/index.html");
    }
}