package com.este.conf.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.este.conf.model.Person;

public interface DaoPerson extends JpaRepository<Person, Integer>{

}
