package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.este.conf.models.Note;

public interface NoteRepository extends JpaRepository<Note, Integer> {

}
