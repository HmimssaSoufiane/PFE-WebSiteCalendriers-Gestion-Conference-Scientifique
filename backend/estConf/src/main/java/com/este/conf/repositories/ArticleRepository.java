package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.este.conf.models.Article;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Integer>  {

}
