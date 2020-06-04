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
	
	
	public Scientist() {
		// TODO Auto-generated constructor stub
	}
	public Scientist(int idPerson, String title, String firstName, String middleName, String lastName, Byte[] photo,
			String organizationName, String country, String region, String phone, String email, String password) {
		super(idPerson, title, firstName, middleName, lastName, photo, organizationName, country, region, phone, email,
				password);
		// TODO Auto-generated constructor stub
	}
	
	public Set<Note> getNotes() {
		return notes;
	}
	public void setNotes(Set<Note> notes) {
		this.notes = notes;
	}
	
	
}
