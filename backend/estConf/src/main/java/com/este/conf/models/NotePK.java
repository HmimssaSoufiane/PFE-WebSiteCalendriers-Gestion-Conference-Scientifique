package com.este.conf.models;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;

@SuppressWarnings("serial")
@Embeddable
public class NotePK  implements Serializable {
	
	
    @Basic(optional = false)
    @Column(name = "idArticle")
    private int idArticle;
    
    @Basic(optional = false)
    @Column(name = "idPerson")
    private int idPerson;

    
    
	public NotePK() {
		super();
	}

	public NotePK(int idArticle, int idPerson) {
		super();
		this.idArticle = idArticle;
		this.idPerson = idPerson;
	}

	public int getIdArticle() {
		return idArticle;
	}

	public void setIdArticle(int idArticle) {
		this.idArticle = idArticle;
	}

	public int getIdPerson() {
		return idPerson;
	}

	public void setIdPerson(int idPerson) {
		this.idPerson = idPerson;
	}
    
    
}