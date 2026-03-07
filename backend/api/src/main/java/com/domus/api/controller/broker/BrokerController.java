package com.domus.api.controller.broker;

import com.domus.api.model.broker.Broker;
import com.domus.api.service.broker.BrokerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/broker")
public class BrokerController {
    private final BrokerService service;

    public BrokerController(BrokerService service) {
        this.service = service;
    }

    @PostMapping()
    public ResponseEntity<Broker> addBroker(@RequestBody Broker broker) {
        service.save(broker);
        return ResponseEntity.ok().body(broker);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<?>> findById(@PathVariable Long id){
        Optional<?> broker = service.findById(id);
        return ResponseEntity.ok().body(broker);
    }

    @GetMapping("/all")
    public List<?> findAll(){
        return service.findAll();
    }

}
