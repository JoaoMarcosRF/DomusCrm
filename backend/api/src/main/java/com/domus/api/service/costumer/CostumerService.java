package com.domus.api.service.costumer;

import com.domus.api.model.costumer.Costumer;
import com.domus.api.model.image.Image;
import com.domus.api.repository.costumer.CostumerRepository;
import com.domus.api.repository.image.ImageRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CostumerService {
    @PersistenceContext
    private EntityManager entityManager;

    private final CostumerRepository repository;

    public CostumerService(CostumerRepository repository){this.repository = repository;}

    public <S extends Costumer> S save(S entity){
        if(entity.getId() == null){
            entity.setRegisterData(LocalDate.now());
            entityManager.persist(entity);
        }
        else{
            entity = entityManager.merge(entity);
        }

        return entity;
    }

    public Optional<Costumer> findById(Long id){
        return repository.findById(id);
    }

    public List<Costumer> findAll(){
        return repository.findAll();
    }

    public void deleteById(Long id){
        repository.deleteById(id);
    }
}
