package com.este.conf.model;

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
    
}