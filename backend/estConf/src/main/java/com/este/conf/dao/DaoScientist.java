package com.este.conf.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.este.conf.model.Scientist;

public interface DaoScientist extends JpaRepository<Scientist, Integer> {

}
