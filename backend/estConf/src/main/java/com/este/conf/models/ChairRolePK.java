package com.este.conf.models;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;

@SuppressWarnings("serial")
@Embeddable
public class ChairRolePK implements Serializable {
    @Basic(optional = false)
    @Column(name = "idConference")
    private int idConference;
    @Basic(optional = false)
    @Column(name = "idPerson")
    private int idPerson;
    
	public ChairRolePK () {}

	public ChairRolePK(int idConference, int idPerson) {
		super();
		this.idConference = idConference;
		this.idPerson = idPerson;
	}

	public int getIdConference() {
		return idConference;
	}

	public void setIdConference(int idConference) {
		this.idConference = idConference;
	}

	public int getIdPerson() {
		return idPerson;
	}

	public void setIdPerson(int idPerson) {
		this.idPerson = idPerson;
	}

	
	
}