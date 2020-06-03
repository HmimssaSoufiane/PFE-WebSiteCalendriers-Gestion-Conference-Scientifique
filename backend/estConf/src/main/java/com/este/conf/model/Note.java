package com.este.conf.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
public class Note {
	

	@EmbeddedId
	protected NotePK notePK;
	private float note;

	@ManyToOne
	@JoinColumn(name = "idPerson", insertable = false, updatable = false)
	@Cascade(value = { CascadeType.ALL })
	private Scientist scientist;

	@ManyToOne
	@JoinColumn(name = "idArticle", insertable = false, updatable = false)
	@Cascade(value = { CascadeType.ALL })
	private Article article;
}
