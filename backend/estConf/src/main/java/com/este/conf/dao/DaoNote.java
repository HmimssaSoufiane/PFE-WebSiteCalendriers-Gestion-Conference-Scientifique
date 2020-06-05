package com.este.conf.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.este.conf.model.Note;

public interface DaoNote extends JpaRepository<Note, Integer> {

}
