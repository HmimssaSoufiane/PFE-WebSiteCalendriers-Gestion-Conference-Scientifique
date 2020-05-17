package com.este.conf.model;

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
	@JoinColumn(name = "idConference", insertable = false, updatable = false)
	@Cascade(value = { CascadeType.ALL })
	private Conference conference;

	@ManyToOne
	@JoinColumn(name = "idPerson", insertable = false, updatable = false)
	@Cascade(value = { CascadeType.ALL })
	private Chair chair;

}
