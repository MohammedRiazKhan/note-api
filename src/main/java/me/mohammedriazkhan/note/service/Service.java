package me.mohammedriazkhan.note.service;

import java.util.Optional;

public interface Service<T, ID> {

    T create(T t);

    Optional<T> read(ID id);

    T update(T t);

    void delete(ID id);

}