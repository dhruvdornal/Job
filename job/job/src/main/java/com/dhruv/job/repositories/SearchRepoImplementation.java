package com.dhruv.job.repositories;

import com.dhruv.job.model.Post;
import com.mongodb.client.MongoClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import org.bson.Document;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
// import org.bson.conversions.Bson;
// import java.util.concurrent.TimeUnit;
// import org.bson.Document;
import com.mongodb.client.AggregateIterable;

import java.util.ArrayList;
import java.util.List;

@Component
public class SearchRepoImplementation implements SearchRepo{

    @Autowired
    MongoClient mongoClient;

    @Autowired
    MongoConverter converter;


    @Override
    public List<Post> findByText(String text){

        final List<Post> posts = new ArrayList<>();
        MongoDatabase database = mongoClient.getDatabase("dhruv");
        MongoCollection<Document> collection = database.getCollection("joblist");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search",
                                new Document("text",
                                new Document("query", text).append("path", "techs"))),
                                new Document("$sort",
                                new Document("exp", 1L))));

        result.forEach(doc -> posts.add(converter.read(Post.class,doc)));

        return posts;

    }
}
