package com.este.conf.dao;

import org.springframework.data.repository.CrudRepository;

import com.este.conf.model.Note;

public interface DaoNote extends CrudRepository<Note, Integer> {

}
