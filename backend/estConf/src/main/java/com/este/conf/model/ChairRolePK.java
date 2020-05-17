package com.este.conf.model;

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
}