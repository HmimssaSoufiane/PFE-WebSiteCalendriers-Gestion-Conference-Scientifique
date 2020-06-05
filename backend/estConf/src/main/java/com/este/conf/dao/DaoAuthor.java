package com.este.conf.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.este.conf.model.Author;

public interface DaoAuthor extends JpaRepository<Author, Integer>   {

}
