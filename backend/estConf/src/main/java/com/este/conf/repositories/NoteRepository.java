package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.este.conf.models.Note;


@Repository
public interface NoteRepository extends JpaRepository<Note, Integer> {

}
