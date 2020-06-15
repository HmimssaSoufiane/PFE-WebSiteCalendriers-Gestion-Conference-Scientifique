package com.este.conf.models;

import java.util.SortedSet;
import java.util.TreeSet;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.SortNatural;

@Entity
public class Scientist extends Person implements Comparable<Scientist>{


	private int nombreOfAtricleChecked;
	@OneToMany(mappedBy = "scientist", orphanRemoval = true)
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	private SortedSet<Note> notes = new TreeSet<>();
	
	
	public Scientist() {
		// TODO Auto-generated constructor stub
	}

	public Scientist(int idPerson, String title, String firstName, String middleName, String lastName,
			String accountType, Byte[] photo, String organizationName, String country, String region, String phone,
			String email, String password) {
		super(idPerson, title, firstName, middleName, lastName, accountType, photo, organizationName, country, region, phone,
				email, password);
		// TODO Auto-generated constructor stub
	}

	public int getNombreOfAtricleChecked() {
		return nombreOfAtricleChecked;
	}
	public void setNombreOfAtricleChecked(int nombreOfAtricleChecked) {
		this.nombreOfAtricleChecked = nombreOfAtricleChecked;
	}
	public SortedSet<Note> getNotes() {
		return notes;
	}
	public void setNotes(SortedSet<Note> notes) {
		this.notes = notes;
	}
	
	@Override
	public int compareTo(Scientist o) {
		if (this.getIdPerson() != o.getIdPerson())
			return 1;
		return 0;
	}
	
	
}
