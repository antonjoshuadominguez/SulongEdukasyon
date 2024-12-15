package com.SulongEdukasyon.Sulong.Edukasyon.Models.Activity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepo extends JpaRepository<ActivityEntity, Long> {
    ActivityEntity findByInstruction(String instruction);
}
