package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.este.conf.models.Author;


@Repository
public interface AuthorRepository extends JpaRepository<Author, Integer>   {

	public Author findByEmail(String email);

}
