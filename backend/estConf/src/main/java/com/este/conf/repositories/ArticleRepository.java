package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.este.conf.models.Article;

public interface ArticleRepository extends JpaRepository<Article, Integer>  {

}
