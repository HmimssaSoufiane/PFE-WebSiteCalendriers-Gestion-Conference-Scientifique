package com.este.conf.dao;

import org.springframework.data.repository.CrudRepository;

import com.este.conf.model.Article;

public interface DaoArticle extends CrudRepository<Article, Integer>  {

}
