package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.este.conf.models.Author;
import com.este.conf.models.Chair;


@Repository
public interface AuthorRepository extends JpaRepository<Author, Integer>   {

	public Chair findByEmail(String email);

}
