package com.psc.sample.keycloak.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Base64;
import java.util.List;


@Slf4j
@RestController
@RequestMapping("/test")
public class TestController {

    @GetMapping("/permitAll")
    public ResponseEntity<String> permitAll() {
        return ResponseEntity.ok("permitAll.\n");
    }

    @GetMapping("/authenticated")
    public ResponseEntity<String> authenticated(@RequestHeader String Authorization) {
        log.debug(Authorization);
        return ResponseEntity.ok("authenticated.\n");
    }

    @GetMapping( "/user")
    public ResponseEntity<String> user(@RequestHeader String Authorization) {
        log.debug(Authorization);
        return ResponseEntity.ok("user success.\n");
    }

    @GetMapping("/admin")
    public List<String> admin(@RequestHeader String Authorization) {
        String token = Authorization.split( " ")[1];
        log.debug(token);
        Base64.Decoder decoder = Base64.getUrlDecoder();
        String[] chunks = token.split("\\.");
        String header = new String(decoder.decode(chunks[0]));
        String payload = new String(decoder.decode(chunks[1]));
        log.debug("header - " + header);
        log.debug("payload - " + payload);

        List<String> list = Arrays.asList("Дизайн", "Разработка", "Маркетинг",
                "ИТ и ПО", "Личностный рост", "Бизнес", "Фотография", "Музыка"
                );
        return list;
    }

}
