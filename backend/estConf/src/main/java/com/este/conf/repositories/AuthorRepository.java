package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.este.conf.models.Author;

public interface AuthorRepository extends JpaRepository<Author, Integer>   {

}
