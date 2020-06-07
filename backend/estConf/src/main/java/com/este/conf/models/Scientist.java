package com.este.conf.models;

import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.SortNatural;

@Entity
public class Scientist extends Person {


	private int nombreOfAtricleChecked;
	@OneToMany(mappedBy = "scientist", orphanRemoval = true)
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	private SortedSet<Note> notes = new TreeSet<>();
	
	
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
	public void setNotes(SortedSet<Note> notes) {
		this.notes = notes;
	}
	public int getNombreOfAtricleChecked() {
		return nombreOfAtricleChecked;
	}
	public void setNombreOfAtricleChecked(int nombreOfAtricleChecked) {
		this.nombreOfAtricleChecked = nombreOfAtricleChecked;
	}
	
	
}
