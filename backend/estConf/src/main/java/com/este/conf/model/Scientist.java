package com.este.conf.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
@Entity
public class Scientist extends Person {

	@OneToMany(mappedBy = "scientist", orphanRemoval = true)
	@Cascade(value = { CascadeType.ALL })
	private Set<Note> notes = new HashSet<>();
	
}
