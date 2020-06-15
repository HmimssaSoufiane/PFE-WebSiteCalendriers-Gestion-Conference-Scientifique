package com.este.conf.models;

import javax.persistence.Entity;

@Entity
public class Listener extends Person implements Comparable<Listener> {


	
	public Listener() {
		// TODO Auto-generated constructor stub
	}

	public Listener(int idPerson, String title, String firstName, String middleName, String lastName, String aounntType,
			Byte[] photo, String organizationName, String country, String region, String phone, String email,
			String password) {
		super(idPerson, title, firstName, middleName, lastName, aounntType, photo, organizationName, country, region, phone,
				email, password);
		// TODO Auto-generated constructor stub
	}

	@Override
	public int compareTo(Listener o) {
		if (this.getIdPerson() != o.getIdPerson())
			return 1;
		return 0;
	}
	
	
}
