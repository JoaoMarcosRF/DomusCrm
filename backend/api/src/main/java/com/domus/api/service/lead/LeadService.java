package com.domus.api.service.lead;

import com.domus.api.model.image.Image;
import com.domus.api.model.lead.Lead;
import com.domus.api.repository.image.ImageRepository;
import com.domus.api.repository.lead.LeadRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class LeadService {
    @PersistenceContext
    private EntityManager entityManager;

    private final LeadRepository repository;

    public LeadService(LeadRepository repository){this.repository = repository;}

    public <S extends Lead> S save(S entity){
        if(entity.getId() == null){
            entityManager.persist(entity);
        }
        else{
            entity = entityManager.merge(entity);
        }

        return entity;
    }

    public Optional<Lead> findById(Long id){
        return repository.findById(id);
    }

    public List<Lead> findAll(){
        return repository.findAll();
    }

    public void deleteById(Long id){
        repository.deleteById(id);
    }
}
