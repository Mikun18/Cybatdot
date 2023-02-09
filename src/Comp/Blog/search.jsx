import React from 'react'
import { Box, Con } from '../../Base/box'
import { Flex } from '../../Base/flex'
import { Button } from '../../Base/button'
import { Input } from '../Contact/Form/form'


const SearchNav = () => {
  return (
    <div>
        <Box>
            <Flex sidebar>
                <Con>
                    <Con>
                        <Button>Blog</Button>
                        <Button margin="0 10px" blogNav>Whitepaper</Button>
                        <Button blogNav>Webinars</Button>
                    </Con>
                </Con>

                <Con bg="#D9D9D9" pad="0px 10px" br="10px">
                    <Flex sidebar>
                        <img src="./Images/search.svg" alt="search" width="20" />
                        <Input search placeholder='Search Blog'/>
                    </Flex>
                </Con>
            </Flex>
        </Box>
    </div>
  )
}

export default SearchNav