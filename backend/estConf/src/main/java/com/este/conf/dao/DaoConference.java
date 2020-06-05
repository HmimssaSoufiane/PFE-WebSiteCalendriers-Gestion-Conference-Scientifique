package com.este.conf.dao;

import org.springframework.data.repository.CrudRepository;

import com.este.conf.model.Conference;

public interface DaoConference extends CrudRepository<Conference, Integer> {

}
