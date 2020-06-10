package com.este.conf.models;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
public class ChairRole {

	@EmbeddedId
	protected ChairRolePK chairRolePK;
	private String role;
	
	@ManyToOne
	@JoinColumn(name = "idChair", insertable = false, updatable = false)
	@Cascade(value = { CascadeType.ALL })
	private Chair chair;
	
	@ManyToOne
	@JoinColumn(name = "idConference", insertable = false, updatable = false)
	@Cascade(value = { CascadeType.ALL })
	private Conference conference;


	
	public ChairRole () {}

	public ChairRole(ChairRolePK chairRolePK, String role, Chair chair, Conference conference) {
		super();
		this.chairRolePK = chairRolePK;
		this.role = role;
		this.chair = chair;
		this.conference = conference;
	}

	public ChairRolePK getChairRolePK() {
		return chairRolePK;
	}



	public void setChairRolePK(ChairRolePK chairRolePK) {
		this.chairRolePK = chairRolePK;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}



	public Chair getChair() {
		return chair;
	}



	public void setChair(Chair chair) {
		this.chair = chair;
	}



	public Conference getConference() {
		return conference;
	}



	public void setConference(Conference conference) {
		this.conference = conference;
	}


}
