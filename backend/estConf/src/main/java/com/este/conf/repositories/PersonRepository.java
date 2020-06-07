package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.este.conf.models.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer>{

}
