package com.este.conf.dao;

import org.springframework.data.repository.CrudRepository;

import com.este.conf.model.Scientist;

public interface DaoScientist extends CrudRepository<Scientist, Integer> {

}
