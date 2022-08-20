package org.renm.lagou.collectionWithOperation;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Stream;

public class CollectionTest {

    @Test
    public void test() {
        ArrayList<String> list = new ArrayList<>();
        Set<String> set = new HashSet<>();
        Stream<List<String>> stream = Stream.of(Arrays.asList("1", "2"));

    }
}