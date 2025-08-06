package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @GetMapping("/api/hello/{name}")
    public Hello hello(@PathVariable("name") String name) {
        return new Hello(name, "Hello " + name);
    }
}
