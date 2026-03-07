package com.domus.api.service.broker;

import com.domus.api.model.broker.Broker;
import com.domus.api.repository.broker.BrokerRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BrokerService {
    @PersistenceContext
    private EntityManager entityManager;


    private final BrokerRepository repository;

    public BrokerService(BrokerRepository repository) {
        this.repository = repository;
    }

    public <S extends Broker> S save(S entity) {
        if (entity.getId() == null) {
            entityManager.persist(entity);
        }
        else {
            entity = entityManager.merge(entity);
        }

        return entity;
    }

    public Optional<?> findById(Long id) {
        return repository.findById(id);
    }

    public List<?> findAll() {
        return repository.findAll();
    }


}
