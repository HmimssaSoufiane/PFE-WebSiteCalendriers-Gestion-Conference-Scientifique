package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.este.conf.models.Person;

public interface PersonRepository extends JpaRepository<Person, Integer>{

}
