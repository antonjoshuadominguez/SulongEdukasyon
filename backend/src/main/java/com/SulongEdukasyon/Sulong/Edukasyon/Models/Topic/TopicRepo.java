package com.SulongEdukasyon.Sulong.Edukasyon.Models.Topic;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TopicRepo extends JpaRepository<TopicEntity, Long> {
    TopicEntity findByTopicTitle(String topicTitle);
}
