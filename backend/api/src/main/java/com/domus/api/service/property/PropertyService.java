package com.domus.api.service.property;

import com.domus.api.model.address.Address;
import com.domus.api.model.broker.Broker;
import com.domus.api.model.property.Property;
import com.domus.api.repository.address.AddressRepository;
import com.domus.api.repository.broker.BrokerRepository;
import com.domus.api.repository.property.PropertyRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PropertyService {
    @PersistenceContext
    private EntityManager entityManager;


    private final PropertyRepository  repository;
    private final AddressRepository addressRepository;
    private final BrokerRepository brokerRepository;


    public PropertyService(PropertyRepository repository, AddressRepository addressRepository, BrokerRepository brokerRepository) {
        this.repository = repository;
        this.addressRepository = addressRepository;
        this.brokerRepository = brokerRepository;
    }

    public <S  extends Property> S save(S entity) {
        if (entity.getId() == null) {

            entity.setRegisterDate(LocalDate.now());

            if(entity.getBroker() != null){
                Broker broker = brokerRepository
                        .findById(entity.getBroker().getId())
                        .orElseThrow(() -> new RuntimeException("Broker not found"));

                entity.setBroker(broker);
            }

            if(entity.getAddress() != null){
                Address address = addressRepository
                        .findById(entity.getAddress().getId())
                        .orElseThrow(() -> new RuntimeException("Address not found"));

                entity.setAddress(address);
            }

            entityManager.persist(entity);
        }
        else {
            entityManager.merge(entity);
        }

        return entity;
    }

    public List<Property> findAll() {
        return repository.findAll();
    }

    public Optional<Property> findById(Long id) {
        return repository.findById(id);
    }

    public void deleteById(Long id){
        repository.deleteById(id);
    }
}
