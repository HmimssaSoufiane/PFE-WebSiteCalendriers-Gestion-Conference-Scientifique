package com.este.conf.dao;

import org.springframework.data.repository.CrudRepository;

import com.este.conf.model.Person;

public interface DaoPerson extends CrudRepository<Person, Integer>{

}
