package com.dhruv.job.repositories;

import com.dhruv.job.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepo extends MongoRepository<Post, String>
{

}
